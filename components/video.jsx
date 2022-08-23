export default function Video() {
  return (
    <section className="section section__video" id="video">
      <div className="container">
        <div className="grid">
          <div className="grid-item">
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
