type Props = {
  onSelect: (block: string) => void;
};

export default function AdminMenu({ onSelect }: Props) {
  return (
    <div className="dropdown">
      <button className="btn btn-outline-secondary dropdown-toggle" style={{ width: "20em", marginLeft: "4em" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Menu
      </button>
      <ul className="dropdown-menu">
        <li><button className="dropdown-item" type="button" onClick={() => onSelect('user')}><i className="bi bi-person mx-2"></i>User</button></li>
        <li><button className="dropdown-item" type="button" onClick={() => onSelect('product')}><i className="bi bi-bag mx-2"></i>Product</button></li>
        <li><button className="dropdown-item" type="button" onClick={() => onSelect('category')}><i className="bi bi-diagram-3 mx-2"></i>Category</button></li>
      </ul>
    </div>
  );
}
