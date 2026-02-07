// ============================================================
// CONFIGURATION — edit these values to match your form
// ============================================================

// Partial match for the course selection question title
var COURSE_QUESTION_KEYWORD = "What online course would you like to study?";

// Maximum participants per course
var COURSE_LIMITS = {
  "English (basic)": 25,
  "English (intermediate)": 30,
  "English (advanced)": 10,
  "German": 10,
  "Photography": 2
};

// All course names (derived from limits)
var ALL_COURSES = Object.keys(COURSE_LIMITS);



// ============================================================
// MAIN: runs every time someone submits the form
// ============================================================

function onFormSubmit(e) {
  updateCourseAvailability();
}


// ============================================================
// UPDATE FORM: remove full courses & show "full" message
// ============================================================

function updateCourseAvailability() {
  var form = FormApp.getActiveForm();
  var counts = countRegistrationsPerCourse(form);

  // Find the course question (partial match since the title is bilingual/multiline)
  var courseItem = null;
  var formItems = form.getItems();
  for (var i = 0; i < formItems.length; i++) {
    if (formItems[i].getTitle().indexOf(COURSE_QUESTION_KEYWORD) !== -1) {
      courseItem = formItems[i];
      break;
    }
  }

  if (!courseItem) {
    Logger.log("Course question not found. Check COURSE_QUESTION_KEYWORD.");
    return;
  }

  var multipleChoiceItem = courseItem.asMultipleChoiceItem();

  // Build available choices and "full" labels
  var choices = [];
  var fullCourses = [];

  for (var j = 0; j < ALL_COURSES.length; j++) {
    var course = ALL_COURSES[j];
    var count = counts[course] || 0;
    var limit = COURSE_LIMITS[course] || 10;
    var spotsLeft = limit - count;

    if (spotsLeft > 0) {
      // Still available
      choices.push(
        multipleChoiceItem.createChoice(course)
      );
    } else {
      // Full — track it
      fullCourses.push(course);
    }
  }

  // Update the help text to show which courses are full
  if (fullCourses.length > 0 && fullCourses.length < ALL_COURSES.length) {
    multipleChoiceItem.setHelpText(
    "\n" +
      "⛔ دوره‌های پر شده (ثبت‌نام بسته است):\n" +
      fullCourses.join("، ")
      + "\n\n\n\n\n"
      + ":دوره های قابل انتخاب"
      
    );
  } else if (fullCourses.length === 0) {
    multipleChoiceItem.setHelpText("");
  }

  // If all courses are full, close the form
  if (choices.length === 0) {
    form.setAcceptingResponses(false);
    form.setCustomClosedFormMessage(
      "متأسفانه ظرفیت تمام دوره‌ها تکمیل شده است. لطفاً بعداً دوباره بررسی کنید."
    );
    Logger.log("All courses are full. Form closed.");
    return;
  }

  // Update the multiple choice options to only show available courses
  multipleChoiceItem.setChoices(choices);

  // Make sure the form is open (in case it was previously closed and spots freed up)
  form.setAcceptingResponses(true);

  Logger.log(
    "Updated: " + choices.length + " available, " + fullCourses.length + " full."
  );
}


// ============================================================
// COUNT how many people registered for each course
// ============================================================

function countRegistrationsPerCourse(form) {
  var responses = form.getResponses();
  var counts = {};

  for (var i = 0; i < responses.length; i++) {
    var itemResponses = responses[i].getItemResponses();
    for (var j = 0; j < itemResponses.length; j++) {
      if (itemResponses[j].getItem().getTitle().indexOf(COURSE_QUESTION_KEYWORD) !== -1) {
        var answer = itemResponses[j].getResponse();
        // Checkbox responses come as an array
        var chosen = Array.isArray(answer) ? answer : [answer];
        for (var k = 0; k < chosen.length; k++) {
          counts[chosen[k]] = (counts[chosen[k]] || 0) + 1;
        }
      }
    }
  }

  return counts;
}


// ============================================================
// SETUP: run this ONCE to create the form-submit trigger
// ============================================================

function setupTrigger() {
  // Remove any existing onFormSubmit triggers to avoid duplicates
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "onFormSubmit") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  // Create the trigger
  ScriptApp.newTrigger("onFormSubmit")
    .forForm(FormApp.getActiveForm())
    .onFormSubmit()
    .create();

  Logger.log("Trigger created successfully.");
}


// ============================================================
// MANUAL: run this to force-update the form right now
// ============================================================

function manualUpdate() {
  updateCourseAvailability();
  Logger.log("Manual update complete.");
}
