export default function SortDropdown({ value, onChange, label }) {
    return (
      <div className="sort-dropdown">
        <label className="sort-dropdown-label">{label}:</label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    );
  }