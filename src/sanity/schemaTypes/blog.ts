
const Blog = {
    name:"blog",
    title:"Blog",
    type:"document",
    fields:[   
        {
        name:"title",
        title:"Title",
        type:"string"
    },
    {
        name:"description",
        title:"Description",
        type:"text"
    },
    {
        name:"slug",
        title:"Slug",
        type:"slug",
        options:{
            source:"title",
            maxLength:150
        }
    },
    {
        name:"image",
        title:"Image",
        type:"image",
        options:{
            hotspot:true,
        }
    },
]
}
export default Blog