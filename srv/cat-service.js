module.exports = async srv => { 

    const { Books } = srv.entities

    srv.on("doUpsert", async req => {       
        let book = await SELECT.one.from(Books).where({ID: req.data.ID})
        console.dir(book)

        // test UPDATE
        book.stock = 99

        await UPDATE(Books, book.ID).with(book) //ok

        book = await SELECT.one.from(Books).where({ID: req.data.ID})
        console.dir(book)

        //test UPSERT
        book.stock = 98

        await UPSERT(book).into(Books) // not ok

        book = await SELECT.one.from(Books).where({ID: req.data.ID})
        console.dir(book)
    })

}