const Map = () => {
  // Coordinates for 123 Business District, Training City, TC 12345
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209096021!2d-73.9878449243112!3d40.75889557571033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus`;

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src={mapSrc}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        title="JUTA Training & Skills Development Location"
        className="rounded-2xl"
      ></iframe>
    </div>
  );
};

export default Map;
