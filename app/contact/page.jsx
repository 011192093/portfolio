"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";  // Corrected import for ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toastify

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "01714531278",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ahmadaalina3@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Baitul Aman Housing, Adabor-13, Mohammadpur, Dhaka",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);  // To handle loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);  // Set loading state

    // Mapping the form data to match the placeholders in the EmailJS template
    const emailData = {
      to_name: "Aalina",    // Passing the first name to the {{to_name}} placeholder
      from_name: `${formData.firstname} ${formData.lastname}`,  // Full name for {{from_name}} placeholder
      message: formData.message,      // Message content for {{message}} placeholder
      email: formData.email,          // Adding email to {{email}} placeholder
      phone: formData.phone,          // Adding phone to {{phone}} placeholder
    };

    emailjs
      .send(
        "service_3dd3sqc",           // Replace with your EmailJS service ID
        "template_ktswye7",          // Replace with your EmailJS template ID
        emailData,                   // Send the mapped form data to EmailJS
        "fuGGpDagmndiIooX5"          // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          setIsLoading(false);  // Reset loading state
          toast.success("Message sent successfully!");  // Show success toast
          setFormData({          // Clear the form data after successful submission
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (err) => {
          setIsLoading(false);  // Reset loading state
          toast.error("Failed to send message, please try again.");  // Show error toast
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <>
      {/* Toast container to show toast messages */}
      <ToastContainer />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-4xl text-accent">Contact me</h3>
                <p className="text-white">
                  I’d love to hear from you! Whether you have questions about my
                  research, want to collaborate, or just want to connect, feel
                  free to reach out.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <Textarea
                  className="h-[200px]"
                  name="message"
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" size="md" className="max-w-40 text-center" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div className="flex-1 flex items-center xl:justify-between order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;
