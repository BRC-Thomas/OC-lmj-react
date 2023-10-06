function Categories({ categories, activeCategory, setActiveCategory }) {
  return (
    <>
      <ul>
        <label htmlFor="category">Catégorie :</label>
        <select
          name="category"
          onChange={(e) => setActiveCategory(e.target.value)}
        >
          {categories.map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
      </ul>
      <button onClick={() => setActiveCategory("")}>Réinitialiser</button>
    </>
  );
}

export default Categories;
