import { useState } from "react";

export function FAQ() {
    const [number, setNumber] = useState(2);

    const articles = [
        {
            title: "Frequently asked",
            content: "In this section, you will find answers to the most common questions. We have collected useful information to help you quickly understand the key topics."
        },
        {
            title: "About us",
            content: "We are a team passionate about sharing knowledge and experience. Our goal is to provide clear and practical materials that make your life easier and more convenient."
        },
        {
            title: "Contact information",
            content: "If you still have questions or suggestions, feel free to reach out. Write us at support@example.com or use the contact form on our website."
        }
    ];

    function handleChange(event) {
        setNumber(Number(event.target.innerText));
    }

    return (
        <div className="flex gap-6 text-black">
            <nav>
                <ul className="space-y-2">
                    {articles.map((_, index) => (
                        <li
                            key={index}
                            onClick={handleChange}
                            className={`cursor-pointer hover:text-red-500 ${
                                number === index ? "font-bold" : ""
                            }`}
                        >
                            {index}
                        </li>
                    ))}
                </ul>
            </nav>

            <article className="max-w-md">
                <h3 className="text-xl font-semibold mb-2">
                    {articles[number].title}
                </h3>
                <p>{articles[number].content}</p>
            </article>
        </div>
    );
}
