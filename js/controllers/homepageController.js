fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      console.log(element);
    })
  );
