import "./DashboardCard.css";

function DashboardCard({ title, value, color }) {
  return (
    <div className="card" style={{ borderLeft: `6px solid ${color}` }}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

export default DashboardCard;