

import "./flogo.css";

export function Flogo() {
    return (
        <div className="flogo">
            {/* WhatsApp Link */}
            <a href="https://wa.me/7750940391" target="_blank" rel="noopener noreferrer">
                <div className="bi bi-whatsapp"></div>
            </a>

            {/* Phone Link */}
            <a href="tel:+91 7750940391">
                <div className="bi bi-telephone"></div>
            </a>
        </div>
    );
}
