"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const courses = [
  {
    title: "انگلیسی — مقدماتی",
    description:
      "مناسب برای کسانی که هیچ یا کمی آشنایی با زبان انگلیسی دارند. این دوره شامل واژگان پایه، گرامر و مهارت‌های مکالمه روزمره است تا از ابتدا اعتماد به نفس شما در زبان را بسازد.",
    icon: "🇬🇧",
    level: "مقدماتی",
  },
  {
    title: "انگلیسی — متوسط",
    description:
      "طراحی شده برای کسانی که درک پایه‌ای از انگلیسی دارند. واژگان خود را گسترش دهید، مهارت‌های خواندن و نوشتن را بهبود ببخشید و مکالمات پیچیده‌تر را تمرین کنید.",
    icon: "🇬🇧",
    level: "متوسط",
  },
  {
    title: "انگلیسی — پیشرفته",
    description:
      "برای کسانی که به انگلیسی مسلط هستند و می‌خواهند روانی خود را تقویت کنند. تمرکز بر گرامر پیشرفته، نوشتار آکادمیک، ارتباطات حرفه‌ای و بیان ظریف در موقعیت‌های واقعی.",
    icon: "🇬🇧",
    level: "پیشرفته",
  },
  {
    title: "آلمانی",
    description:
      "یک دوره مقدماتی زبان آلمانی شامل گرامر ضروری، واژگان و مهارت‌های مکالمه. مناسب برای کسانی که قصد تحصیل، کار یا زندگی در کشورهای آلمانی‌زبان را دارند.",
    icon: "🇩🇪",
    level: "مقدماتی تا متوسط",
  },
  {
    title: "عکاسی",
    description:
      "هنر عکاسی را از ترکیب‌بندی و نورپردازی تا ویرایش و داستان‌گویی بیاموزید. چه با گوشی هوشمند عکاسی کنید و چه با دوربین حرفه‌ای، این دوره به شما کمک می‌کند تصاویر معنادار بگیرید و چشم خلاق خود را پرورش دهید.",
    icon: "📷",
    level: "همه سطوح",
  },
];

const rules = [
  {
    title: "حضور",
    description:
      "حضور منظم الزامی است. اگر بیش از ۳ جلسه بدون اطلاع قبلی غیبت کنید، ممکن است از دوره حذف شوید.",
  },
  {
    title: "وقت‌شناسی",
    description:
      "لطفاً به موقع در هر جلسه حاضر شوید. کلاس‌ها دقیقاً در زمان برنامه‌ریزی شده شروع می‌شوند.",
  },
  {
    title: "احترام و ارتباط",
    description:
      "با تمام شرکت‌کنندگان و مدرسین با احترام رفتار کنید. آزار، تبعیض یا رفتار مخرب تحمل نخواهد شد.",
  },
  {
    title: "مشارکت فعال",
    description:
      "از شما انتظار می‌رود در بحث‌ها، تمرین‌ها و تکالیف محول شده در طول جلسات و بین جلسات فعالانه شرکت کنید.",
  },
  {
    title: "الزامات فنی",
    description:
      "به اینترنت پایدار و یک دستگاه با دوربین و میکروفون نیاز دارید. دوربین باید در طول جلسات روشن باشد مگر اینکه خلاف آن اعلام شود.",
  },
  {
    title: "تعهد",
    description:
      "با ثبت‌نام، متعهد می‌شوید که دوره را کامل بگذرانید. اگر دیگر امکان شرکت ندارید، لطفاً هر چه زودتر به ما اطلاع دهید تا جای شما به شخص دیگری داده شود.",
  },
];

const REGISTRATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfXlWIEnv892hu_YgemtTqQDv-JOUYERDAeIQkf3xW-xpdvhA/viewform?usp=publish-editor";

const Page: React.FC = () => {
  return (
    <div dir="rtl" className="flex flex-col items-center justify-center py-16 px-4 bg-gray-100">
      {/* بخش معرفی */}
      <div className="w-full max-w-4xl mx-auto text-center mb-12">
        <div className="relative">
          <Image
            src="/img/jvanah/heros/Lang.jpg"
            alt="دوره‌های ژوانه"
            width={500}
            height={500}
            className="rounded-full mx-auto mb-6"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-primaryGreen mb-4">
          ثبت‌نام در دوره‌ها
        </h1>
        <p className="text-lg text-primary mb-4 max-w-2xl mx-auto">
هدف ما فراهم کردن آموزش در دسترس است که شما را با مهارت‌ها،
          دانش و اعتماد به نفس جدید توانمند سازد هر جای دنیا که باشید.
        </p>
        <p className="text-base text-primary/80 max-w-2xl mx-auto">
          تمام دوره‌ها به صورت{" "}
          <strong>جلسات آنلاین هفتگی</strong> برگزار می‌شوند که از خانه به آن‌ها
          می‌پیوندید. هر جلسه زنده و تعاملی است و فرصت یادگیری مستقیم از مدرسین
          و ارتباط با سایر شرکت‌کنندگان را به شما می‌دهد.
        </p>
      </div>

      {/* بخش دوره‌های موجود */}
      <div className="w-full max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-primaryGreen text-center mb-10">
          دوره‌های موجود
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col"
            >
              <div className="text-4xl mb-3">{course.icon}</div>
              <h3 className="text-xl font-bold text-primaryGreen mb-1">
                {course.title}
              </h3>
              <span className="text-xs font-semibold text-white bg-primaryGreen/80 rounded-full px-3 py-1 w-fit mb-3">
                {course.level}
              </span>
              <p className="text-sm text-primary/80 leading-relaxed flex-1">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* بخش نحوه کار */}
      <div className="w-full max-w-4xl mx-auto mb-16 px-4">
        <section className="bg-gradient-to-l from-primaryGreen to-primary p-8 rounded-xl shadow-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">نحوه ثبت‌نام</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white text-primaryGreen flex items-center justify-center mb-3">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                ۱. ثبت‌نام و لیست انتظار
              </h3>
              <p className="text-white/90 text-sm">
                فرم ثبت‌نام را پر کنید، دوره مورد نظر خود را انتخاب کنید و
                در لیست انتظار قرار خواهید گرفت.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white text-primaryGreen flex items-center justify-center mb-3">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm1.615 3.253a1 1 0 011.37-.364l4.07 2.442 4.07-2.442a1 1 0 011.007 1.727l-4.57 2.742a1 1 0 01-1.007 0l-4.57-2.742a1 1 0 01-.37-1.363z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                ۲. تأیید از طریق ایمیل
              </h3>
              <p className="text-white/90 text-sm">
                یک ایمیل تأیید با لینکی برای تأیید ثبت‌نام و تضمین جای خود
                دریافت خواهید کرد.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white text-primaryGreen flex items-center justify-center mb-3">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                ۳. عضویت و شروع یادگیری
              </h3>
              <p className="text-white/90 text-sm">
                به گروه واتساپ دوره خود بپیوندید و جلسات هفتگی خود را شروع
                کنید.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* بخش قوانین */}
      <div className="w-full max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-bold text-primaryGreen text-center mb-8">
          قوانین و انتظارات
        </h2>
        <p className="text-center text-primary/70 mb-8 max-w-2xl mx-auto">
          برای اطمینان از یک محیط یادگیری مثبت و سازنده برای همه، لطفاً قوانین
          زیر را قبل از ثبت‌نام مطالعه کنید.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {rules.map((rule, index) => (
            <div
              key={rule.title}
              className="bg-white rounded-xl shadow-md p-5 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primaryGreen text-white flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">{rule.title}</h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* دکمه ثبت‌نام */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <section className="bg-gradient-to-l from-primary to-primaryGreen p-10 rounded-xl shadow-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            آماده شروع یادگیری هستید؟
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            ثبت‌نام باز است. دوره خود را انتخاب کنید، فرم را پر کنید و به جلسه
            بعدی بپیوندید. ظرفیت محدود است همین امروز ثبت‌نام کنید!
          </p>
          <Link
            target="_blank"
            href={REGISTRATION_FORM_URL}
            className="inline-block px-8 py-4 text-lg font-bold text-primaryGreen bg-white rounded-full shadow-lg hover:bg-lighterGreen hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-200"
          >
            ثبت‌نام کنید
          </Link>
        </section>
      </div>

      {/* پایان */}
      <div className="w-full max-w-4xl mx-auto mt-12 px-4 text-center">
        <p className="text-base text-primary/70">
          سوالی دارید؟ با ما در تماس باشید:{" "}
          <a
            href="mailto:info@jvanah.se"
            className="text-primaryGreen underline hover:text-primary transition"
          >
            info@jvanah.se
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Page;
