function ArtistCard({ artist }) {
    return (
        <div className="bg-[#181818] p-4 rounded-xl hover:bg-[#282828] transition-all duration-300 cursor-pointer text-center">
            <img
                src={artist.image}
                alt={artist.name}
                className="w-32 h-32 rounded-full mx-auto object-cover"
            />

            <h3 className="mt-4 font-semibold">
                {artist.name}
            </h3>

            <p className="text-gray-400 text-sm">
                Artist
            </p>
        </div>
    );
}

export default ArtistCard;