

const User = ({user}) => {
    const {id ,name ,email,phone}=user;
    return (
        <div>
        <h2>{name}</h2>
        <p>phone:{phone}</p>
        <p>email:{email}</p>
            
        </div>
    );
};

export default User;