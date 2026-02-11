"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";

const courses = [
  {
    title: "انگلیسی — مقدماتی",
    description:
      "مناسب برای کسانی که هیچ یا کمی آشنایی با زبان انگلیسی دارند. این دوره شامل واژگان پایه، گرامر و مهارت‌های مکالمه روزمره است.",
    icon: "🇬🇧",
    level: "مقدماتی",
  },
  {
    title: "انگلیسی — متوسط",
    description:
      "طراحی شده برای کسانی که درک پایه‌ای از انگلیسی دارند. واژگان خود را گسترش دهید و مکالمات پیچیده‌تر را تمرین کنید.",
    icon: "🇬🇧",
    level: "متوسط",
  },
  {
    title: "انگلیسی — پیشرفته",
    description:
      "برای کسانی که به انگلیسی مسلط هستند و می‌خواهند روانی خود را تقویت کنند. تمرکز بر گرامر پیشرفته و ارتباطات حرفه‌ای.",
    icon: "🇬🇧",
    level: "پیشرفته",
  },
  {
    title: "آلمانی",
    description:
      "یک دوره مقدماتی زبان آلمانی شامل گرامر ضروری، واژگان و مهارت‌های مکالمه. مناسب برای کسانی که قصد زندگی در کشورهای آلمانی‌زبان را دارند.",
    icon: "🇩🇪",
    level: "مقدماتی تا متوسط",
  },
  {
    title: "عکاسی",
    description:
      "هنر عکاسی را از ترکیب‌بندی و نورپردازی تا ویرایش و داستان‌گویی بیاموزید. این دوره به شما کمک می‌کند تصاویر معنادار بگیرید.",
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
      "با تمام شرکت‌کنندگان و مدرسین با احترام رفتار کنید. آزار یا رفتار مخرب تحمل نخواهد شد.",
  },
  {
    title: "مشارکت فعال",
    description:
      "از شما انتظار می‌رود در بحث‌ها، تمرین‌ها و تکالیف فعالانه شرکت کنید.",
  },
  {
    title: "الزامات فنی",
    description:
      "به اینترنت پایدار و یک دستگاه با دوربین و میکروفون نیاز دارید. دوربین باید در طول جلسات روشن باشد.",
  },
  {
    title: "تعهد",
    description:
      "با ثبت‌نام، متعهد می‌شوید که دوره را کامل بگذرانید. اگر دیگر امکان شرکت ندارید، لطفاً به ما اطلاع دهید.",
  },
];

const REGISTRATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfXlWIEnv892hu_YgemtTqQDv-JOUYERDAeIQkf3xW-xpdvhA/viewform?usp=publish-editor";

const steps = [
  {
    num: "۱",
    title: "ثبت‌نام و لیست انتظار",
    description:
      "فرم ثبت‌نام را پر کنید، دوره مورد نظر خود را انتخاب کنید و در لیست انتظار قرار خواهید گرفت.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
      />
    ),
  },
  {
    num: "۲",
    title: "تأیید از طریق ایمیل",
    description:
      "یک ایمیل تأیید با لینکی برای تأیید ثبت‌نام و تضمین جای خود دریافت خواهید کرد.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    ),
  },
  {
    num: "۳",
    title: "عضویت و شروع یادگیری",
    description:
      "به گروه واتساپ دوره خود بپیوندید و جلسات هفتگی خود را شروع کنید.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    ),
  },
];

const Page: React.FC = () => {
  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage-100/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

        <Container className="relative pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="relative mb-8">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-soft-lg rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/img/jvanah/heros/Lang.jpg"
                  alt="دوره‌های ژوانه"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
              آموزش آنلاین
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4 text-balance">
              ثبت‌نام در دوره‌ها
            </h1>
            <p className="text-base md:text-lg text-navy-400 leading-relaxed mb-2">
              هدف ما فراهم کردن آموزش در دسترس است که شما را با مهارت‌ها، دانش و
              اعتماد به نفس جدید توانمند سازد.
            </p>
            <p className="text-sm text-navy-300 max-w-lg">
              تمام دوره‌ها به صورت{" "}
              <strong className="text-navy-500">جلسات آنلاین هفتگی</strong>{" "}
              برگزار می‌شوند — زنده و تعاملی.
            </p>
          </div>
        </Container>
      </section>

      {/* Courses */}
      <section className="py-12 md:py-20">
        <Container>
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">
            دوره‌های موجود
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-6 h-full flex flex-col">
                  <div className="text-3xl mb-3">{course.icon}</div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1">
                    {course.title}
                  </h3>
                  <span className="inline-block text-[10px] font-semibold text-white bg-sage-500 rounded-full px-3 py-0.5 w-fit mb-3">
                    {course.level}
                  </span>
                  <p className="text-sm text-navy-400 leading-relaxed flex-1">
                    {course.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-sage-500 to-sage-600 px-8 py-14 md:px-14 md:py-16 shadow-green-glow">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              نحوه ثبت‌نام
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      {step.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Rules */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-900 mb-3">
              قوانین و انتظارات
            </h2>
            <p className="text-sm text-navy-400 max-w-lg mx-auto">
              برای اطمینان از یک محیط یادگیری مثبت و سازنده، لطفاً قوانین زیر
              را قبل از ثبت‌نام مطالعه کنید.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {rules.map((rule, index) => (
              <div
                key={rule.title}
                className="bg-white rounded-2xl shadow-soft p-5 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-sage-50 text-sage-600 flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 text-sm mb-1">
                    {rule.title}
                  </h3>
                  <p className="text-xs text-navy-400 leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 px-8 py-14 md:px-16 md:py-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage-400/10 rounded-full blur-2xl" />

            <div className="relative max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                می‌خواهید در دوره‌های بعدی شرکت کنید؟
              </h2>
              <p className="text-navy-200 mb-8 text-base leading-relaxed">
                ظرفیت دوره‌های فعلی تکمیل شده است. با ثبت‌نام در لیست انتظار، به
                محض باز شدن ظرفیت جدید به شما اطلاع خواهیم داد.
              </p>
              <Link
                target="_blank"
                href={REGISTRATION_FORM_URL}
                className="inline-flex items-center px-8 py-3.5 text-sm font-semibold text-navy-900 bg-white rounded-full shadow-soft-lg hover:shadow-soft-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                ثبت‌نام در لیست انتظار
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="pb-16">
        <Container>
          <p className="text-center text-sm text-navy-400">
            سوالی دارید؟ با ما در تماس باشید:{" "}
            <a
              href="mailto:info@jvanah.se"
              className="text-sage-600 hover:text-sage-700 transition-colors font-medium"
            >
              info@jvanah.se
            </a>
          </p>
        </Container>
      </section>
    </div>
  );
};

export default Page;
