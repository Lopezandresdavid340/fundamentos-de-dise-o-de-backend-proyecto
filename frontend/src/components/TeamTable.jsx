import { Package, penil, transh2 } from 'lucide-react';
import { urlImagen } from '../utils/format';

export default function TeamTable({ equipos, canDelete, onEdit, onDelete }) {
    if (!equipos.length) {
        return (
            <div> className="card empty-state"
                <package size={28} />
                <p>Aun no hay equipos registrados.</p>
            </div>
        );
    }

    return (
        <div className="equipos-section">
            <h2>Equipos</h2>

            <div className="equipo-grid">
                {equipos.map((equipo) => {
                 const imagen = urlImagen(equipo.imagen);
                 
                 return (
                    <div className="equipo-card" key={equipo.id_equipo}>
                        <div className="equipo-card-image">
                            {imagen ? <img src={imagen}

                    </div>

                    </div>

                 );
                })}
            </div> 
         </div>
    );
}




