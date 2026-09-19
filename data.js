//All the data for the site. To change a value, make sure that any text is always between quotation marks (i.e. "text"). Any text that comes on the same line as // is a comment made for you to understand what each text block does. To make a new paragraph, write <br> instead of pressing enter, since pressing enter does not change anything

const data = {



    //Important data for the entire website

    important: {

        email: "email@email.com",
        phone: "07308491182",
        locations: ["South London", "East London", "West London", "North London", "Reading", "Oxfordshire", "Berkshire", "Greater London", "England",],

    },


    //Data for the home screen

    homescreen: {



        //The following 2 lines are for the text that appears on the top of the home screen

        primary_title_text: "Professional removal services...",
        secondary_title_text: "...from just £20 per hour!",


        //The following line is the paragraph that appears after 'a bit about us'
        
        about_us: "At Skyway Haulers, we understand that moving home, furniture or business equipment can be stressful. Our goal is to make the process as smooth, simple and stress-free and possible.<br><br>We take pride in providing a professional, friendly and reliable moving service, with a strong focus on communication and taking care of our customers belongings.<br><br>Our customers consistently appreciate our helpful approach, professionalism, punctuality and careful handling of their items. We believe that every move deserves the same level of care and attention, whether it's a single piece of furniture or a full house move.",


        //The next 2 blocks are for the 2 services that appear on the homescreen

        first_service: {

            title: "Service 1",
            description: "Insert a short description of this service here",

        },
        second_service: {

            title: "Service 2",
            description: "Insert a short description of this service here",

        },


        //The next 5 blocks are for the 5 reviews that appear on the homescreen only (not the same as the reviews page, that is separate)
       
        homescreen_reviews: [

            { //First review

                name: "Name of Reviewer",
                date: "MMM YYYY",
                review_text: "Insert the full review here.",

            },
            { //Second review

                name: "Name of Reviewer",
                date: "MMM YYYY",
                review_text: "Insert the full review here.",

            },
            { //Third review

                name: "Name of Reviewer",
                date: "MMM YYYY",
                review_text: "Insert the full review here.",

            },
            { //Fourth review

                name: "Name of Reviewer",
                date: "MMM YYYY",
                review_text: "Insert the full review here.",

            },
            { //Fifth review

                name: "Name of Reviewer",
                date: "MMM YYYY",
                review_text: "Insert the full review here.",

            },

        ],

    },


    //Data for both the services and prices screen

    services_and_prices: {



        //The introductory text at the top of the services screen

        services_introductory_text: "Here at Skyway Haulers, we offer a range of services, so you can always be sure we have what you need.",
       
       
        //The introductory text at the top of the prices screen

        prices_introductory_text: "Our prices are cheap and competitive, and customer satisfaction is our number one priority.",



        //The next 3 blocks are for your 3 services. If you do not require 3 blocks, delete everything between and including a single pair of {} in a single block. If you require more than 3 blocks, simply copy and paste an already existing block (everything between a single pair of {}) and change the text to your liking
        list_of_services: [



            { //First service

                service_title: "Service 1",
                service_description: "Insert service description here.",
                price_description: "Insert price description here.",

                //The review for this specific service:
                name: "Name of Reviewer",
                date: "MMM YYYY",
                review_text: "Insert the full review here.",

            },
            { //Second service

                service_title: "Service 2",
                service_description: "Insert service description here.",
                price_description: "Insert price description here.",

                //The review for this specific service:
                name: "Name of Reviewer",
                date: "MMM YYYY",
                review_text: "Insert the full review here.",

            },
            { //Third service

                service_title: "Service 3",
                service_description: "Insert service description here.",
                price_description: "Insert price description here.",

                //The review for this specific service:
                name: "Name of Reviewer",
                date: "MMM YYYY",
                review_text: "Insert the full review here.",

            },

        ],

    },


    //List of all reviews to be shown on the reviews screen. To remove or add a review, either delete a single pair of {} brackets with everything inside, or copy-paste a new pair of {} brackets with everything inside and adjust the values as needed
    
    list_of_reviews: [



        {

            name: "Name of Reviewer",
            date: "MMM YYYY",
            review_text: "Insert the full review here.",

        },
        {

            name: "Name of Reviewer",
            date: "MMM YYYY",
            review_text: "Quick service",

        },
        {

            name: "Name of Reviewer",
            date: "MMM YYYY",
            review_text: "Insert the full review here.",

        },
        {

            name: "Name of Reviewer",
            date: "MMM YYYY",
            review_text: "Insert the full review here.",

        },
        {

            name: "Name of Reviewer",
            date: "MMM YYYY",
            review_text: "Insert the full review here.",

        },
        {

            name: "Name of Reviewer",
            date: "MMM YYYY",
            review_text: "Insert the full review here.",

        },
        {

            name: "Name of Reviewer",
            date: "MMM YYYY",
            review_text: "Insert the full review here.",

        },
        {

            name: "Name of Reviewer",
            date: "MMM YYYY",
            review_text: "Insert the full review here.",

        },
    
    ],

};
