

export default function RecipeCard({ recipe }) {

    
  return (
    <div className="recipe-card">
      {/* TODO: Add dynamic image */}
      <img src={recipe.img} alt={recipe.title} />

      <div className="recipe-card-content">
        <h3>{recipe.title}</h3>

        {/* TODO: Add description */}
        <p className="recipe-description">
          {recipe.description
            ? recipe.description
            : "No description available."}
        </p>
        {/* TODO: Add view more button */}

        <button className="view-more-btn">View More</button>
      </div>
    </div>
  );
}
