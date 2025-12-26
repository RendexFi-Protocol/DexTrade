import GlassButton from "../ui/GlassButton";
import "./TopButtons.css";

export default function TopButtons() {
  return (
    <div className="top-buttons">
      <GlassButton className="top-button left">
        👥
      </GlassButton>

      <GlassButton className="top-button right">
        📢
      </GlassButton>
    </div>
  );
}
