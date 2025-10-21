import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Makeup',
        image: General_physician
    },
    {
        speciality: 'Bridal',
        image: Gynecologist
    },
    {
        speciality: 'Skincare',
        image: Dermatologist
    },
    {
        speciality: 'Manicure',
        image: Pediatricians
    },
    {
        speciality: 'Hair',
        image: Neurologist
    },
    {
        speciality: 'Grooming',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Mr. Manish Mittal',
        image: doc1,
        speciality: 'Makeup',
        experience: '4 Years',
        about: 'Our makeup artists at BlushBay provide a full range of services including base makeup, contouring, highlighting, eye makeup, lipstick, and setting sprays. They focus on enhancing your natural beauty with precision and creativity for all occasions, whether casual events, parties, or photoshoots. Our team ensures each client receives a personalized look that is long-lasting, stylish, and perfectly suited to their skin tone. Our makeup services are designed to make you feel confident, radiant, and camera-ready every time.',
        fees: 500,
        address: {
            line1: 'BlushBay Studio',
            line2: '21 Orchid Street, Gurgaon'
        }
    },
    {
        _id: 'doc2',
        name: 'Ms. Rachel Garg',
        image: doc2,
        speciality: 'Bridal',
        experience: '3 Years',
        about: 'Our bridal artists specialize in complete bridal transformations including skincare prep, foundation, eye makeup, blush, lipstick, and setting sprays. We cater to destination weddings, engagement ceremonies, and pre-wedding events, ensuring each bride looks flawless. Our team combines traditional and modern styles, with long-lasting makeup that withstands photography, ceremonies, and celebrations. Every session is personalized, creating a radiant, confident, and elegant bridal appearance.',
        fees: 700,
        address: {
            line1: 'BlushBay Lounge',
            line2: '45 Jasmine lane, Connaught Place'
        }
    },
    {
        _id: 'doc3',
        name: 'Ms. Mitali Aeron',
        image: doc3,
        speciality: 'Skincare',
        experience: '1 Years',
        about: 'Our skincare experts provide facials, exfoliation, hydration masks, serums, and moisturizers designed to rejuvenate and maintain healthy skin. We focus on preventive care, targeting issues like dryness, acne, and dullness with personalized treatments for all skin types. Our services are suitable for routine maintenance, special occasions, and pre-makeup prep, ensuring your skin looks radiant and refreshed. Each session is performed with precision, quality products, and attention to long-term skin wellness.',
        fees: 300,
        address: {
            line1: 'BlushBay Salon',
            line2: '56 Rose Avenue, Hauz khas'
        }
    },
    {
        _id: 'doc4',
        name: 'Mr. Abhishek Indrani',
        image: doc4,
        speciality: 'Manicure',
        experience: '2 Years',
        about: 'Our manicure services include nail shaping, cuticle care, hand massage, polish application, and creative nail art. We cater to casual looks, party-ready nails, and pre-event styling, ensuring healthy and stylish hands. Each session is tailored to client preferences, combining precision, hygiene, and attention to detail. Our goal is to leave your nails polished, elegant, and long-lasting, providing the perfect finishing touch to your overall look.',
        fees: 300,
        address: {
            line1: 'BlushBay Salon',
            line2: '56 Rose Avenue, Hauz khas'
        }
    },
    {
        _id: 'doc5',
        name: 'Mr. Kartik Malhotra',
        image: doc5,
        speciality: 'Hair',
        experience: '4 Years',
        about: 'Our hair services include haircuts, blow-dry, styling, coloring, highlights, and nourishing treatments. We cater to daily styling, parties, photoshoots, and special events, ensuring hair looks healthy, vibrant, and elegant. Our team focuses on creating styles that suit face shapes, textures, and personal preferences while maintaining hair strength and shine. Every client enjoys a polished, manageable, and camera-ready finish tailored to their lifestyle and needs.',
        fees: 400,
        address: {
            line1: 'BlushBay Salon',
            line2: '56 Rose Avenue, Hauz khas'
        }
    },
    {
        _id: 'doc6',
        name: 'Mr. Zaffar Khan',
        image: doc6,
        speciality: 'Hair',
        experience: '4 Years',
        about: 'We offer professional haircuts, blowouts, color treatments, highlights, and hair masks for healthy, stylish, and voluminous hair. Our services cover daily grooming, weddings, and special occasions, with personalized advice for hair care and maintenance. Stylists focus on precision, creativity, and long-lasting results, ensuring hair looks glossy, smooth, and perfectly styled for every event.',
        fees: 400,
        address: {
            line1: 'BlushBay Studio',
            line2: '21 Orchid Street, Gurgaon'
        }
    },
    {
        _id: 'doc7',
        name: 'Mr. Karan Kapoor',
        image: doc7,
        speciality: 'Makeup',
        experience: '4 Years',
        about: 'We offer professional makeup sessions including primer, foundation, concealer, blush, eyeshadow, eyeliner, mascara, and lip color. Each session is tailored to your preferences and the event, from small gatherings to formal celebrations. Our artists combine current trends with classic techniques, ensuring a flawless finish that enhances your features. Every client experiences expert application, smooth blending, and a long-lasting look that stays perfect throughout the day or night.',
        fees: 500,
        address: {
            line1: 'BlushBay Lounge',
            line2: '45 Jasmine lane, Connaught Place'
        }
    },
    {
        _id: 'doc8',
        name: 'Ms. Niharika Vats',
        image: doc8,
        speciality: 'Bridal',
        experience: '3 Years',
        about: 'We offer full bridal makeup packages including facial prep, cleansing, moisturizer, primer, contouring, eye makeup, lip color, and final setting. Our services cover sangeet, mehendi, and reception functions, as well as destination weddings. Each bride receives customized attention for skin tone, outfit coordination, and personal style. The result is a glowing, sophisticated, and camera-ready bridal look that highlights her best features for every memorable moment.',
        fees: 700,
        address: {
            line1: 'BlushBay Lounge',
            line2: '45 Jasmine lane, Connaught Place'
        }
    },
    {
        _id: 'doc9',
        name: 'Mr. Raj Anguralia',
        image: doc9,
        speciality: 'Skincare',
        experience: '1 Years',
        about: 'Our personalized skincare services include cleansing, exfoliation, toners, masks, serums, and moisturizers that enhance skin texture and tone. We cater to routine skincare, pre-bridal prep, and special events, ensuring skin is healthy, hydrated, and radiant. Treatments are designed to balance, repair, and rejuvenate, using professional-grade products and techniques. Each client enjoys a calming and effective experience that improves skin appearance and overall wellness.',
        fees: 300,
        address: {
            line1: 'BlushBay Salon',
            line2: '56 Rose Avenue, Hauz khas'
        }
    },
    {
        _id: 'doc10',
        name: 'Ms. Muskan Aggarwal',
        image: doc10,
        speciality: 'Manicure',
        experience: '2 Years',
        about: 'We provide professional nail care including cleaning, filing, cuticle treatment, hand massage, and polish application. Our services suit daily wear, special occasions, and pre-event pampering, focusing on aesthetics and nail health. Each manicure is performed with care and creativity, ensuring nails remain strong, shiny, and beautifully styled. Clients leave feeling polished, confident, and ready to complement any outfit or event.',
        fees: 300,
        address: {
            line1: 'BlushBay Salon',
            line2: '56 Rose Avenue, Hauz khas'
        }
    },
    {
        _id: 'doc11',
        name: 'Ms. Jerry',
        image: doc11,
        speciality: 'Grooming',
        experience: '4 Years',
        about: 'Our grooming services include threading, waxing, eyebrow shaping, and facial treatments using skin-friendly products. We cater to pre-event grooming, daily maintenance, and special occasions, ensuring smooth, refined, and polished results. Each session focuses on precision, hygiene, and personalized care, leaving clients confident and perfectly groomed for any look or event.',
        fees: 200,
        address: {
            line1: 'BlushBay Studio',
            line2: '21 Orchid Street, Gurgaon'
        }
    },
    {
        _id: 'doc12',
        name: 'Ms. Komal Bora',
        image: doc12,
        speciality: 'Hair',
        experience: '4 Years',
        about: 'Our hair package includes shampoo, conditioning, trims, blow-dry, styling, and finishing with nourishing products. We cater to birthdays, events, corporate functions, and pre-wedding shoots, enhancing hair health and appearance. Treatments are designed to restore shine, manageability, and volume, with attention to every strand. Clients leave with strong, vibrant, and effortlessly styled hair that complements their overall look.',
        fees: 300,
        address: {
            line1: 'BlushBay Lounge',
            line2: '45 Jasmine lane, Connaught Place'
        }
    },
    {
        _id: 'doc13',
        name: 'Ms. Riya Jain',
        image: doc13,
        speciality: 'Makeup',
        experience: '4 Years',
        about: 'At BlushBay, our makeup services include full-face application, contouring, eye styling, lip makeup, and final touch-ups. We cater to birthdays, corporate events, casual meet-ups, and evening parties, providing a personalized approach to suit every occasion. The team focuses on delivering vibrant, elegant, and polished looks while maintaining skin health and comfort. We ensure each client leaves feeling confident, glamorous, and perfectly styled.',
        fees: 500,
        address: {
            line1: 'BlushBay Lounge',
            line2: '45 Jasmine lane, Connaught Place'
        }
    },
    {
        _id: 'doc14',
        name: 'Mr. Ryan Chadda',
        image: doc14,
        speciality: 'Bridal',
        experience: '3 Years',
        about: 'Our expert bridal team provides deep cleansing, exfoliation, serum application, foundation, eye makeup, blush, lipstick, and final touch-ups. We cater to engagement parties, pre-wedding shoots, and the main wedding day, ensuring a cohesive and stunning appearance. The approach combines traditional bridal elegance with modern makeup trends, delivering long-lasting, flawless results. Every bride enjoys a stress-free, personalized experience designed to make her feel beautiful and confident throughout her special day.',
        fees: 800,
        address: {
            line1: 'BlushBay Studio',
            line2: '21 Orchid Street, Gurgaon'
        }
    },
    {
        _id: 'doc15',
        name: 'Mr. Tushar Kapoor',
        image: doc15,
        speciality: 'Skincare',
        experience: '1 Years',
        about: 'Our personalized skincare services include cleansing, exfoliation, toners, masks, serums, and moisturizers that enhance skin texture and tone. We cater to routine skincare, pre-bridal prep, and special events, ensuring skin is healthy, hydrated, and radiant. Treatments are designed to balance, repair, and rejuvenate, using professional-grade products and techniques. Each client enjoys a calming and effective experience that improves skin appearance and overall wellness.',
        fees: 200,
        address: {
            line1: 'BlushBay Salon',
            line2: '56 Rose Avenue, Hauz khas'
        }
    },
]