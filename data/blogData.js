const blog = {
    articles: [
        {
            id: 1, //number
            title: "Men in the modern world.", //string
            summary: "Human beings are complicated. Each one of us is unique. In this post we’ll read an extremely helpful note on this verse in New Testament Recovery Version to help us understand these three parts.", //string
            subtitle: "Very strange term modern world?", //string
            text: "Quisque efficitur felis nec eros fringilla tempus. Pellentesque vel turpis laoreet metus pellentesque pretium vitae non nisl. Donec in augue mauris. In risus erat, suscipit sed posuere id, maximus malesuada magna. Proin volutpat eleifend justo in venenatis. Nam sed congue eros. Maecenas nec luctus erat, non iaculis est. Duis id ante placerat, volutpat enim finibus, maximus leo. Duis auctor velit nec mauris malesuada, et aliquam dui fermentum. Donec erat elit, egestas id nisi non, accumsan pharetra erat. Phasellus at dui ut metus egestas pretium quis vel ex. Maecenas erat mauris, finibus in est a, iaculis pretium sem. In quis dolor quis eros lobortis facilisis. Sed congue pharetra massa, non mattis mi dictum vitae. Nullam ultrices ipsum a massa varius fermentum.", //string
            image: " ", //string
            authorID: " ", //number (foreignKey of the authors)
            tags: [
                "modern world", "spirituality"
            ],
            publishedDate: "21-05-2022" //number
        },
        {
            id: 2, //number
            title: "Men and spirituality", //string
            summary: "Imagine if you were encouraged to express who you really are. Not to fit in, but to stand out. Not to be more “spiritual and evolved”—all passive and polite and purged of all ferocity— but to become who you actually aspire to be.", //string
            subtitle: "Fuck spiritual. Be you!", //string
            text: "Quisque efficitur felis nec eros fringilla tempus. Pellentesque vel turpis laoreet metus pellentesque pretium vitae non nisl. Donec in augue mauris. In risus erat, suscipit sed posuere id, maximus malesuada magna. Proin volutpat eleifend justo in venenatis. Nam sed congue eros. Maecenas nec luctus erat, non iaculis est. Duis id ante placerat, volutpat enim finibus, maximus leo. Duis auctor velit nec mauris malesuada, et aliquam dui fermentum. Donec erat elit, egestas id nisi non, accumsan pharetra erat. Phasellus at dui ut metus egestas pretium quis vel ex. Maecenas erat mauris, finibus in est a, iaculis pretium sem. In quis dolor quis eros lobortis facilisis. Sed congue pharetra massa, non mattis mi dictum vitae. Nullam ultrices ipsum a massa varius fermentum.", //string
            image: " ", //string
            authorID: " ", //number (foreignKey of the authors)
            tags: [
                "spirituality"
            ],
            publishedDate: "01-05-2022" //number
        }
    ],
    authors: [
        {
            id: 1, //number
            firstName: "Thomas", //string
            lastName: "Barnes", //string
            image: " ", //string
            birthDate: "18-10-1995", //number
            bio: "`Hi, Im Irish! That is less an excuse as the start of a typical vita. Currently I work at a law firm in Dublin and I enjoy cycling, working on cars and walking. I grew up on a farm, with 4 brothers and sisters, in a very small village near Kent. I grew up on a farm, with 4 brothers and sisters, in a very small village near Kent. My parents are hippies and I grew up with freedom, respect for all earthlings and lots of love! Moving to Dublin made me realise, that my childhood was the exception and most men struggle to find the balance between menhood and being a loving human. In my early twenties, I started writing about spirituality, love and humanity in a men's world, hoping to make a difference and this world a better place! Lot's of love, Thomas.`", //string
            long: "-6.258150", //number
            lat: "53.354030", //number
        },
        {
            id: 2, //number
            firstName: "James", //string
            lastName: "Bearden", //string
            image: " ", //string
            birthDate: "21-12-1986", //number
            bio: "`My passion is art in (almost) every form. I'm passionate about Jazz, Photography and Street-Art. After my father died when I was young, I was raised by my mother and grew up with no father figure and no notion about what it means to be a man. After I graduated college, I started studying sports science at college but actually never finished the course. I felt that I would rather have an impact and help kids, who had a similar childhood. But there was more... During my work with the kids I discovered, that not only kids but Men as well are in need of spiritual guidance. That is the reason, why I startetd publishing articles about Men at modern times and male spirituality. `", //string
            long: "13.411440", //number
            lat: "52.523430", //number
           }
    ],
}

module.exports = blog;