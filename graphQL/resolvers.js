const data = {
    books:[{
        id:"101", title:"Book1", publishedYear: 2000, authorId:"1"
    },
    {
        id:"102", title:"Book2", publishedYear: 2001, authorId:"1"
    },
    {
        id:"103", title:"Book3", publishedYear: 2002, authorId:"2"
    }
],
    authors:[
        {
            id:"1", name:"Author1", bookIds:["101","102"]
        },
        {
            id:"2", name:"Author2", bookIds:["103"]
        }
    ]
}

export const resolvers = {
    Author:{
        books:(parent,args,context,info)=>{
            return data.books.filter(bookData=>parent.bookIds.includes(bookData.id))
        }
    },
    Book:{
        author:(parent, args, context, info)=>{
            console.log(parent);
            return data.authors.find(authorData=>authorData.id===parent.authorId);
        }
    },
    Query:{
        authors: ()=>{
            return data.authors;
        },
        books:()=>{
            return data.books;
        }
    },
    Mutation:{
        addBook:(parent, args, context, info)=>{
            const newBook = {...args,id:data.books.length + 1}
            data.books.push(newBook)
            return newBook
        }
    }
}