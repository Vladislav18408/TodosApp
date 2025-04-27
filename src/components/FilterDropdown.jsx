export default function FilterDropdown({ value, onChange }) {
    return (
      <div className="filter-dropdown">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">All Users</option>
          {[...Array(10)].map((_, idx) => (
            <option key={idx} value={idx + 1}>
              User {idx + 1}
            </option>
          ))}
        </select>
      </div>
    );
  }