import ListAlbums from "../components/ListAlbums";

export default function Home() {
  return (
    <div className="pt-28 md:pl-72 p-8">
      <ListAlbums title="Spotify Playlists"/>
      <ListAlbums title="Sleep"/>
      <ListAlbums title="Approach"/>
      <ListAlbums title="Mood"/>
    </div>
  );
}
