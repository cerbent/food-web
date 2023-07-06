import React, { useState } from 'react';


const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState<null>(null);

    const handleAccordionClick = (index:any) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const renderAccordionItems = () => {
        const accordionData = [
            { title: 'Раздел 1', content: 'Содержимое раздела 1...' },
            { title: 'Раздел 2', content: 'Содержимое раздела 2...' },
            { title: 'Раздел 3', content: 'Содержимое раздела 3...' }
        ];

        return accordionData.map((item, index) => (
            <div key={index}>
                <button
                    className={`accordion ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleAccordionClick(index)}
                >
                    {item.title}
                </button>
                <div className={`panel ${activeIndex === index ? 'active' : ''}`}>
                    <p>{item.content}</p>
                </div>
            </div>
        ));
    };

    return (
        <div>
            <h2>Аккордеон</h2>
            {renderAccordionItems()}
        </div>
    );
};

export default Accordion;
