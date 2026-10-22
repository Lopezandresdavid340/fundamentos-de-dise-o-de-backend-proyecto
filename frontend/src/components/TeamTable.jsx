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
                            {imagen ? <img src={imagen} alt={equipo.nombre} /> : <package size={32} />}
                        </div>

                        <div className="equipo-card-body">
                            <h3>{equipo.nombre}</h3>
                            <p> className="equipo-card-meta"
                                {equipo.marca || 'Sin marca'} . {equipo.modelo || 'Sin modelo'}
                            </p>
                        </div>

                        <div className="actions equipo-card-actions">
                            <button className="edit" onclick={() => onEdit(equipo)}>
                                <pencil size={16} />
                                Editar
                            </button>
                            {canDelete && (
                                <button className="secondary" onclick={() => onDelete(equipo.id_equipo)}>
                                <transh2 size={16} />
                                Eliminar    
                                </button>
                            )}
                        </div>
                    </div>
                );
            })}
            </div> 
         </div>
    );
}




