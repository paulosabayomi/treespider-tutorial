// import TreeSpider from "https://unpkg.com/treespider@latest/dist/es/treeSpider.bundle.min.js"
import TreeSpider from "./dist/es/treeSpider.bundle.min.js"

const employee_data = [
    {
        id: "1",
        name: "Abayomi Amusa",
        role: "CEO",
        location: "Lagos, Nigeria"
    },
    {
        id: "2",
        parentId: "1",
        name: "Trey Anderson",
        role: "Product Manager",
        location: "California, United States"
    },
    {
        id: "3",
        parentId: "1",
        name: "Troy Manuel",
        role: "Software Developer",
        location: "Alberta, Canada"
    },
    {
        id: "4",
        parentId: "1",
        name: "Rebecca Oslon",
        role: "Software Developer",
        location: "London, United Kingdom"
    },
    {
        id: "5",
        parentId: "1",
        name: "David Scheg",
        role: "Product Designer",
        location: "Jiaozian, China"
    },
    {
        id: "6",
        parentId: "2",
        name: "James Zucks",
        role: "DevOps",
        location: "Accra, Ghana"
    },
    {
        id: "7",
        parentId: "2",
        name: "Zu Po Xe",
        role: "Backend Developer",
        location: "Johanesburg, South Africa"
    },
    {
        id: "8",
        parentId: "2",
        name: "Scott Ziagler",
        role: "FrontEnd Developer Intern"
    },
    {
        id: "9",
        parentId: "7",
        name: "Xervia Allero",
        role: "FrontEnd Developer Intern"
    },
    {
        id: "10",
        parentId: "3",
        name: "Adebowale Ajanlekoko",
        role: "Fullstack Developer"
    },
]

const instance1 = new TreeSpider({
    targetContainer: "#container-1",
    // tree_data: employee_data,
    // tree_type: "cellar",
    tree_type: "vSpiderWalk",
    random_data_length: 20,
    chart_head_type: "landscape",
    linker_thumb_shape: "symbolDiamond2",
    head_image_shape: "symbolDiamond2",
    tree_link_type: "curveLinear",
    backgroundPattern: "blurry"
})

const instance2 = new TreeSpider({
    targetContainer: "#container-2"
});

const instance3 = new TreeSpider({
    targetContainer: "#container-3",
    backgroundPattern: "flux"
})