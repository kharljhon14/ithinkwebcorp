import User from "../models/user";

interface props {
   user: User;
   onDelete: (id: number) => void;
   onIsDetailsOpen: () => void;
}

const Details = ({ user, onDelete, onIsDetailsOpen }: props) => {
   return (
      <div className="details">
         <div className="card">
            <div className="card__image">
               <img src={user.avatar} alt="avatar" />
            </div>
            <div className="card__info">
               <h2 className="card__info-header header-1">{`${user.first_name} ${user.last_name}`}</h2>
               <p className="card__info-id">{`ID number: ${user.id}`}</p>
               <p className="card__info-email">{`Email: ${user.email}`}</p>
            </div>
            <div className="card__cta">
               <button onClick={onIsDetailsOpen} className="btn">
                  Cancel
               </button>
               <button onClick={() => onDelete(user.id)} className="btn btn-dark">
                  Delete
               </button>
            </div>
         </div>
      </div>
   );
};

export default Details;
