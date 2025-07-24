import React, { useState } from 'react';
import { UserRole } from '../../interfaces/user';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


export default function UserAdmin() {
    const [openBlock, setOpenBlock] = useState<null | string>(null);
    const [selectedRoleCreate, setSelectedRoleCreate] = useState<UserRole>(UserRole.USER);
    const [selectedRoleUpdate, setSelectedRoleUpdate] = useState<UserRole>(UserRole.USER);

    const roleOptions = [
        { value: UserRole.ADMIN, label: 'Admin' },
        { value: UserRole.USER, label: 'User' },
        { value: UserRole.MANAGER, label: 'Manager' },
    ];

    const user = useSelector((state: RootState) => state.user.user);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [updateUserId, setUpdateUserId] = useState(user?.id ?? '');
    const [updateFirstName, setUpdateFirstName] = useState(user?.firstName ?? '');
    const [updateLastName, setUpdateLastName] = useState(user?.lastName ?? '');
    const [updateEmail, setUpdateEmail] = useState(user?.email ?? '');
    const [updatePassword, setUpdatePassword] = useState('');

    const [deleteUserId, setDeleteUserId] = useState('');



    const toggleBlock = (block: string) => {
        setOpenBlock((prev) => (prev === block ? null : block));
    };

    const createClick = () => {
        console.log(firstName, lastName, email, password, selectedRoleCreate);
    };

    return (
    <div className="container">
      <h2 className="mb-4">User Management</h2>

      <div className="mb-3 border rounded p-3">
        <button className="btn btn-link fw-bold text-success" onClick={() => toggleBlock('create')}>
          {openBlock === 'create' ? '▾' : '▸'} Create User
        </button>
        {openBlock === 'create' && (
          <div className="mt-3">
            <form>
              <div className="mb-2">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input id="firstName" className="form-control" type="text" value = { firstName } onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div className="mb-2">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input id="lastName" className="form-control" type="text" value = { lastName } onChange={(e) => setLastName(e.target.value)}/>
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input id="email" className="form-control" type="email" value = { email } onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="form-label">Password</label>
                <input id="password" className="form-control" type="password" value = { password } onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="roleCreate" className="form-label">Role</label>
                <select
                  id="roleCreate"
                  className="form-select"
                  value={selectedRoleCreate}
                  onChange={(e) => setSelectedRoleCreate(e.target.value as UserRole)}
                >
                  {roleOptions.map((role) => (
                    <option key={role.value} value={role.value}>{role.label}</option>
                  ))}
                </select>
              </div>
              <button className="btn btn-success" onClick={() => createClick() }>Create</button>
            </form>
          </div>
        )}
      </div>

      <div className="mb-3 border rounded p-3">
        <button className="btn btn-link fw-bold" onClick={() => toggleBlock('update')}>
          {openBlock === 'update' ? '▾' : '▸'} Update User
        </button>
        {openBlock === 'update' && (
          <div className="mt-3">
            <form>
              <div className="mb-2">
                <label htmlFor="userId" className="form-label">User ID</label>
                <input id="userId" className="form-control" type="text" value={updateUserId} onChange={(e) => setUpdateUserId(e.target.value)}/>
              </div>
              <div className="mb-2">
                <label htmlFor="newfirstName" className="form-label">New First Name</label>
                <input id="newfirstName" className="form-control" type="text" value={updateFirstName} onChange={(e) => setUpdateFirstName(e.target.value)}/>
              </div>
              <div className="mb-2">
                <label htmlFor="newlastName" className="form-label">New Last Name</label>
                <input id="newlastName" className="form-control" type="text" value={updateLastName} onChange={(e) => setUpdateLastName(e.target.value)}/>
              </div>
              <div className="mb-2">
                <label htmlFor="newEmail" className="form-label">New Email</label>
                <input id="newEmail" className="form-control" type="email" value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)}/>
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="form-label">New Password</label>
                <input id="password" className="form-control" type="password" value={updatePassword} onChange={(e) => setUpdatePassword(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="roleUpdate" className="form-label">New Role</label>
                <select
                  id="roleUpdate"
                  className="form-select"
                  value={selectedRoleUpdate}
                  onChange={(e) => setSelectedRoleUpdate(e.target.value as UserRole)}
                >
                  {roleOptions.map((role) => (
                    <option key={role.value} value={role.value}>{role.label}</option>
                  ))}
                </select>
              </div>
              <button className="btn btn-primary">Update</button>
            </form>
          </div>
        )}
      </div>

      <div className="mb-3 border rounded p-3">
        <button className="btn btn-link fw-bold text-danger" onClick={() => toggleBlock('delete')}>
          {openBlock === 'delete' ? '▾' : '▸'} Delete User
        </button>
        {openBlock === 'delete' && (
          <div className="mt-3">
            <form>
              <div className="mb-2">
                <label htmlFor="deleteUserId" className="form-label">User ID</label>
                <input id="deleteUserId" className="form-control" type="text" value={deleteUserId} onChange={(e) => setDeleteUserId(e.target.value)}/>
              </div>
              <button className="btn btn-danger">Delete</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}