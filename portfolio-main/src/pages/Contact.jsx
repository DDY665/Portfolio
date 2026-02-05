import { useState } from "react";
import emailjs from "@emailjs/browser";
import TypingText from "../components/TypingText";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus("Message sent successfully ");
        setForm({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("Failed to send message ");
      })
      .finally(() => setSending(false));
  };

  return (
    <div className="w-full mt-6 sm:mt-10 space-y-10">
      <TypingText text="> contact --let's connect" speed={40} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="space-y-6 lg:col-span-1">
          <div className="glass p-6 sm:p-8">
            <h3 className="text-xl mb-6 text-main font-semibold">
              Contact Information
            </h3>

            <div className="space-y-3 text-dim text-sm sm:text-base">
              <p>Email: darvishyadav6655@gmail.com</p>
              <p>Phone: +91 81256 37200</p>
              <p>Location: Hyderabad, India</p>
            </div>
          </div>

          <div className="glass p-6 sm:p-8">
            <h3 className="text-xl mb-6 text-main font-semibold">
              Social Profiles
            </h3>

            <div className="space-y-3 text-dim text-sm sm:text-base">
              <a
                href="https://github.com/DDY665"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-main transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/darvish-yadav-a37134246/"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-main transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="glass p-6 sm:p-8 md:p-10 lg:col-span-2">
          <h3 className="text-2xl mb-8 text-main font-semibold">
            Send a Message
          </h3>

          <form onSubmit={sendEmail} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                required
                className="bg-transparent border border-dim/30 p-4 rounded-md outline-none focus:border-main text-main placeholder:text-dim"
              />

              <input
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                required
                className="bg-transparent border border-dim/30 p-4 rounded-md outline-none focus:border-main text-main placeholder:text-dim"
              />
            </div>

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              required
              className="w-full bg-transparent border border-dim/30 p-4 rounded-md outline-none focus:border-main text-main placeholder:text-dim"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Message"
              required
              className="w-full bg-transparent border border-dim/30 p-4 rounded-md outline-none focus:border-main text-main placeholder:text-dim"
            />

            <button
              type="submit"
              disabled={sending}
              className="
                w-full
                border border-main
                text-main
                font-semibold
                py-4
                rounded-md
                hover:bg-main hover:text-bg
                transition
                cursor-pointer
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center mt-4 font-[JetBrains_Mono] text-main">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
