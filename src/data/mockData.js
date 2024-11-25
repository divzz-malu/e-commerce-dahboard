import DefaultIcon from '../assets/icons/default-menu.png';
import Ecom from '../assets/icons/eCom.png';
import Project from '../assets/icons/Projects.png';
import Cource from '../assets/icons/Cource.png';
import UserProfile from '../assets/icons/userProfile.png';
import Account from '../assets/icons/account.png';
import Corporate from '../assets/icons/corporate.png';
import Blog from '../assets/icons/corporate.png';
import Social from '../assets/icons/social.png'

export const menuItems = [
    {
        title: "Dashboards",
        links: [
            { label: "Default", icon:DefaultIcon, path: "/" },
            {label: "eCommerce", icon:Ecom,path:"/ecommerce", links:[
                {label:"eCom1", path:"/ecommerce"},
                {label:"eCom2", path:"/ecommerce"},
                {label:"eCom3", path:"/ecommerce"},
            ]},
            {label: "Project", icon:Project,path:"/project", links:[
                {label:"Proj1", path:"/project"},
                {label:"Proj2", path:"/project"},
                {label:"Proj3", path:"/project"},
            ]},
            {label: "Online Cources", icon:Cource,path:"/onlineCources", links:[
                {label:"Cource1", path:"/onlineCources"},
                {label:"Cource2", path:"/onlineCources"},
                {label:"Cource3", path:"/onlineCources"},
            ]},
        ],
    },
    {
        title: "Pages",
        links: [
            { label: "User Profile", icon: UserProfile, path: "/page", links:[
                {label:"Overview", path:"/overview"},
                {label:"Projects", path:"/projects"},
                {label:"Campaigns", path:"/campaigns"},
                {label:"Documents", path:"/documents"},
                {label:"Followers", path:"/followers"}
            ] },
            {label: "Account", icon:Account,path:"/account",links:[
                {label:"Account1", path:"/account"},
                {label:"Account2", path:"/account"},
                {label:"Account3", path:"/account"},
            ]},
            {label: "Corporate", icon:Corporate,path:"/corporate",links:[
                {label:"Corporate1", path:"/corporate"},
                {label:"Corporate2", path:"/corporate"},
                {label:"Corporate3", path:"/corporate"},
            ]},
            {label: "Blog", icon:Blog,path:"/blog",links:[
                {label:"Blog1", path:"/blog"},
                {label:"Blog2", path:"/blog"},
                {label:"Blog3", path:"/blog"},
            ]},
            {label:"Social", icon:Social,path:"/social",links:[
                {label:"Social1", path:"/social"},
                {label:"Social2", path:"/social"},
                {label:"Social3", path:"/social"},
            ]}
        ],
    },
];

// export const BarChartData = {
// labels:["Jan","Feb","Mar","Apr","May","June"],
// dataets:[
//     {
//         label:"Projection",
//         data:['18M',"21M","10M","23M","15M","21M"],
//         borderWidth:1
//     }
// ]
// }
//     

export const BarChartData = [
    {
        label: "Jan",
        value: '18000000',
    },
    {
        label: "Feb",
        value: "25000000",
    },
    {
        label: "Mar",
        value: "25000000",
    },
    {
        label: "Apr",
        value: "29000000",
    },
    {
        label: "May",
        value: "19000000",
    },
    {
        label: "June",
        value: "25000000",
    },
    
];

export const LineChartData = [
    {
        label: "Jan",
        value: '10000000',
    },
    {
        label: "Feb",
        value: "19000000",
    },
    {
        label: "Mar",
        value: "15000000",
    },
    {
        label: "Apr",
        value: "12000000",
    },
    {
        label: "May",
        value: "13000000",
    },
    {
        label: "June",
        value: "22000000",
    },
];
