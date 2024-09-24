import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const image = "/marker.jpg";
import axios from 'axios';

const icon = new L.Icon({
    iconUrl: image,
    iconSize: new L.Point(40, 41),
    iconAnchor: [13, 41],
});

interface IMapProps {
    latitude: string;
    longitude: string;
}

export const getCoordinatesFromAddress = async (logradouro: string, cidade: string): Promise<{ lat: number, lon: number } | null> => {

    const response = await axios.get('https://nominatim.openstreetmap.org/search?q=' + encodeURIComponent(logradouro + ", " + cidade + ", ") + '&format=json');

    const data = response.data[0];

    if (data && data.lat && data.lon) {
        return { lat: parseFloat(data.lat), lon: parseFloat(data.lon) };
    }

    return null;
}

const Map = ({ latitude, longitude }: IMapProps) => {

    let position: any = [latitude, longitude];

    return (
        <>
            <MapContainer
                center={position}
                zoom={25}
                touchZoom={true}
                boxZoom={true}
                className='mapleaflet ht-400'
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position} icon={icon} />
            </MapContainer>

        </>
    );
}

export default Map;