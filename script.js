const cars = [
    {
        carName: "Skoda Superb",
        type: "Sedan",
        parentCompany: "Volkswagen",
        engine: "1.2L Petrol",
        mileage: "18 - 20 kmpl",
        price: "₹ 35 - 40 Lakh",
        image: "https://images.unsplash.com/photo-1615554754180-20118f604097",
        pros: [
            "Premium interior",
            "Powerful engine",
            "Spacious cabin"
        ],
        cons: [
            "Expensive maintenance",
            "Lower mileage"
        ]
    },
    {
        carName: "Tata Punch",
        type: "Micro SUV",
        parentCompany: "Tata Motors",
        engine: "1.2L Petrol",
        mileage: "20 - 22 kmpl",
        price: "₹ 5.60 - 10.55 Lakh",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537",
        pros: [
            "5★ safety rating",
            "High ground clearance"
        ],
        cons: [
            "Limited boot space"
        ]
    },
    {
        carName: "Hyundai Creta",
        type: "SUV",
        parentCompany: "Hyundai",
        engine: "1.5L Petrol/Diesel",
        mileage: "17 - 21 kmpl",
        price: "₹ 11 - 20 Lakh",
        image: "https://images.unsplash.com/photo-1629080790865-448e0fa458f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3JldGElMjBjYXJ8ZW58MHx8MHx8fDA%3D",
        pros: [
            "Modern design",
            "Feature loaded",
            "Smooth engine"
        ],
        cons: [
            "Expensive top variant"
        ]
    },
    {
        carName: "Honda City",
        type: "Sedan",
        parentCompany: "Honda",
        engine: "1.5L Petrol",
        mileage: "18 - 19 kmpl",
        price: "₹ 12 - 16 Lakh",
        image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
        pros: [
            "Reliable engine",
            "Comfortable ride"
        ],
        cons: [
            "Low ground clearance"
        ]
    },
    {
        carName: "Mahindra Thar",
        type: "Off-road SUV",
        parentCompany: "Mahindra",
        engine: "2.0L Petrol / Diesel",
        mileage: "15 - 18 kmpl",
        price: "₹ 11 - 17 Lakh",
        image: "https://images.unsplash.com/photo-1633867179970-c54688bcfa33?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pros: [
            "Strong off-road capability",
            "Bold design"
        ],
        cons: [
            "Stiff suspension"
        ]
    }
];

let main = document.querySelector("main");
let sum = "";

cars.forEach(function (elem) {

    sum += `
        <div class="car-card">

            <div>
                <div class="available-badge">Available</div>
                <img src="${elem.image}" alt="${elem.carName}">
            </div>

            <div class="car-details">
                <h2>${elem.carName} </h2>
                <h3>${elem.parentCompany}</h3>
                <h4>Engine: ${elem.engine}</h4>
                <h5>Mileage: ${elem.mileage}</h5>
                <h6>Price: ${elem.price}</h6>

                <div class="extra-info">

                    <div class="pros">
                        <h4>Pros</h4>
                        ${elem.pros.map(p => `<p>${p}</p>`).join("")}
                    </div>

                    <div class="cons">
                        <h4>Cons</h4>
                        ${elem.cons.map(c => `<p>${c}</p>`).join("")}
                    </div>

                </div>

            </div>

        </div>
    `;
});

main.innerHTML = sum;