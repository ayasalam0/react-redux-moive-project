function Home() {
  return (
    <div>
      <div className="trending-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Trending</h2>
            </div>
            {/* Movie card component */}
            {/* display as slider */}
          </div>
        </div>
      </div>
      <div className="popular-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Popular</h2>
            </div>
            <div className="col-md-5">{/* Movie card component */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;