import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Config/sequelize';
import Address from './Address'; 
import Document from './Document';

class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public profileImg!: string | null;
  public email!: string;
  public password!: string;
  public phoneNo!: string | null;
  public dob!: Date | null;
  public gender!: string | null;
  public bloodGroup!: string | null;
  public documentId!: number | null;
  public addressId!: number | null; 
  public role!: 'Doctor' | 'Patient' | 'Admin';
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bloodGroup: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    documentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Document,
        key: 'id'
      },
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Address,
        key: 'id',
      },
    },
    role: {
      type: DataTypes.ENUM('Doctor', 'Patient', 'Admin'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);


export default User;
