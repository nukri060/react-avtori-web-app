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

    function handleChange(selectedIndex) {
        setNumber(selectedIndex);
    }

    return (
        <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-8 text-gray-800">
            <nav className="w-full lg:w-1/4">
                <ul className="space-y-4">
                    {articles.map((article, index) => (
                        <li
                            key={index}
                            onClick={() => handleChange(index)}
                            className={`cursor-pointer text-lg p-3 rounded-lg transition-all duration-200 ease-in-out ${
                                number === index
                                    ? "bg-blue-600 text-white shadow-md transform scale-105"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                            }`}
                        >
                            {article.title}
                        </li>
                    ))}
                </ul>
            </nav>

            <article className="max-w-full lg:max-w-3xl flex-1 bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-4 text-blue-700">
                    {articles[number].title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                    {articles[number].content}
                </p>
            </article>
        </div>
    );
}
