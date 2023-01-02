//sidebar import
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal
    
} from "@iconscout/react-unicons"
import Messi from "../imgs/Messi.jpg"
import Ronaldo from "../imgs/Ronaldo.jpg"
import Salah from "../imgs/Salah.jpg"

export const SidebarData=[
    {icon:UilEstate,
        heading:"Dashboard"
    },
    {icon:UilClipboardAlt,
        heading:"Orders"
    },
    {icon:UilUsersAlt,
        heading:"Customers"
    },
    {icon:UilPackage,
        heading:"Products"
    },
    {icon:UilChart,
        heading:"Analytics"
    }, 

]
//Analytics Cards Data
export const CardData=[
    {
        title:"sales",
        color:{
            backGround:"linear-gradient(90deg, rgba(34, 193, 195, 1)0%, rgba(139, 11,11,1)97%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
        },
        barValue:70,
        value:"25, 970",
        png:UilUsdSquare,
        series:[
            {
            name:"Sales",
            data: [31, 40, 28, 51, 42, 109, 100],

        },
        
   ],
},
    {
        title:"Expenses",
        color:{
            
            backGround:"radial-gradient(circle, rgba(150, 30, 82, 1) 6%, rgba(56, 80, 116, 1)97%)",
            boxShadow:"0px 10px 20px 0px #F9D59B",
        },
        barValue:60,
        value:"4, 270",
        png:UilClipboardAlt,
        series:[
        {
            name:"Expenses",
            data: [10, 25, 15, 30, 12, 15, 20],

        },
    ]
    },
    {
        title:"Revenue",
        color:{
            
            backGround:"linear-gradient(60deg, rgba(97, 26, 151, 1) 12%, rgba(5, 27, 6, 0.3631707704984225)88%)",
            boxShadow:"0px 10px 20px 0px #FDC0C7",
        }, 
        barValue:60,
        value:"4, 270",
        png:UilMoneyWithdrawal,
        series:[
        {
            name:"Expenses2",
            data: [10, 100, 50, 70, 80, 30, 40],

        },
    ],
    },
];
//Recent update card data
export const UpdatesData=[
    {
        img:Messi,
        name:"Edozie",
        noti:"Has ordered samsung watch 2500 battery",
        time:" 40 seconds ago"
    },
    {
        img:Ronaldo,
        name:"Chibuzor",
        noti:"Has ordered Apple watch 2500 battery",
        time:" 50 seconds ago"
    },
    {
        img:Salah,
        name:"Michael",
        noti:"Has ordered sony watch 2500 battery",
        time:" 2 hours ago"
    }
]