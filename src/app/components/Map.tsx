import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const mapStyle = 'mapbox://styles/mapbox/streets-v12';

const Map = () => {
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZmVsaXBldGhkZXYiLCJhIjoiY2xscW1ndG1rMGU4bzNmczVoZnlyNWI2ZyJ9.wc2FZ8PSZxitFe5yuvB-pQ';

        const map = new mapboxgl.Map({
            container: 'map',
            style: mapStyle,
            center: [-46.95647154073128, -22.430445696805315],
            zoom: 13,
            scrollZoom: false,
            dragPan: false
        });

        return () => map.remove();
    }, []);

    return (
        <div id="map" className="w-full h-96 mt-8"></div>
    );
};

export default Map;

