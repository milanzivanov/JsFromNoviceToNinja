const list = document.querySelector('ul');

const addRecipes = (recipe) => {
    let time = recipe.created_at.toDate();
    let html = `
        <li>
            <div>${recipe.title}</div>
            <div>${time}</div>
        </li>
    `

    // console.log(html);
    list.innerHTML += html;
}

db.collection('recipes').get().then((snapshot) => {
    // when we have the data
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        addRecipes(doc.data());
    });

}).catch(err => console.log(err))