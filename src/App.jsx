import { useState } from "react";
import { Heart, Sparkles, Flower2, Mail, RotateCcw, Stars, HandHeart } from "lucide-react";
import "./App.css";

const hearts = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 7) % 100}%`,
  delay: `${(i % 8) * -1.7}s`,
  duration: `${10 + (i % 7) * 1.7}s`,
  size: `${12 + (i % 5) * 5}px`,
}));

function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="floating-heart"
          fill="currentColor"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            width: heart.size,
            height: heart.size,
          }}
        />
      ))}
    </div>
  );
}

function RoseGarden() {
  return (
    <div className="rose-garden" aria-label="A little garden of tulips">
      <div className="rose rose-one"><span>🌷</span></div>
      <div className="rose rose-two"><span>🌷</span></div>
      <div className="rose rose-three"><span>🌷</span></div>
      <div className="rose rose-four"><span>🌷</span></div>
      <div className="rose rose-five"><span>🌷</span></div>
      <div className="garden-sparkle sparkle-a">✦</div>
      <div className="garden-sparkle sparkle-b">✧</div>
      <div className="garden-sparkle sparkle-c">✦</div>
    </div>
  );
}

function LoveLetter({ opened, onOpen }) {
  return (
    <div className={`letter-wrap ${opened ? "letter-open" : ""}`}>
      {!opened ? (
        <button className="envelope" onClick={onOpen} aria-label="Open your love letter">
          <div className="envelope-back" />
          <div className="letter-preview">
            <Heart size={24} fill="currentColor" />
            <span>A letter for Mariya</span>
          </div>
          <div className="envelope-flap" />
          <div className="envelope-front" />
          <span className="envelope-hint">Tap to open 💌</span>
        </button>
      ) : (
        <article className="love-letter">
          <div className="letter-stamp">♡</div>
          <p className="letter-date">A little note, just for you</p>
          <h3>Meri jaan Mariya ❤️</h3>
          <p>
            Allah aapko lambi aur barkat wali zindagi ata farmaye, aur hamesha khush rakhe.
            Aap humare liye bohot aham hain. Hum aapse bohot pyaar karte hain. Aap Allah ki
            taraf se humare liye behtareen ne’maton mein se ek ne’mat hain. ❤️
          </p>
          <p>
            Aap gussa ho ya naraz, hum aapse hamesha pyaar karte rahenge. Shayad humein apna
            pyaar jatana nahi aata, lekin aap humare liye bohot khaas hain. Humari hamesha
            koshish rahegi ki aapko khush rakhein aur har achhe-bure waqt mein aapka saath dein.
          </p>
          <p>
            Hum aapko naraz nahi karna chahte, lekin humse galti ho jaati hai. Toh apne is
            masoom se ladke ko maaf kar dena. 🥹❤️
          </p>
          <p className="letter-signoff">Aapka masoom ladka,<br />Shaizad ❤️</p>
          <div className="letter-flower">🌷</div>
        </article>
      )}
    </div>
  );
}

export default function App() {
  const [chapter, setChapter] = useState(0);
  const [duaRevealed, setDuaRevealed] = useState(false);
  const [letterOpened, setLetterOpened] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const nextChapter = () => {
    setChapter((current) => Math.min(current + 1, 3));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const restart = () => {
    setChapter(0);
    setDuaRevealed(false);
    setLetterOpened(false);
    setShowFinal(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <FloatingHearts />

      <header className="topbar">
        <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); restart(); }}>
          <span className="brand-icon"><Heart size={15} fill="currentColor" /></span>
          <span>just for Mariya</span>
        </a>
        <span className="topbar-note"><Sparkles size={14} /> made with love</span>
      </header>

      <div className="story-progress" aria-label={`Chapter ${chapter + 1} of 4`}>
        {[0, 1, 2, 3].map((item) => (
          <span key={item} className={item <= chapter ? "progress-dot active" : "progress-dot"} />
        ))}
      </div>

      {chapter === 0 && (
        <section className="story-screen welcome-screen" id="home">
          <div className="eyebrow"><Stars size={15} /> A tiny birthday universe</div>
          <div className="hero-heart">
            <div className="hero-heart-ring ring-one" />
            <div className="hero-heart-ring ring-two" />
            <Heart className="hero-heart-icon" fill="currentColor" strokeWidth={1} />
            <span className="heart-star star-one">✦</span>
            <span className="heart-star star-two">✧</span>
            <span className="heart-star star-three">✦</span>
          </div>
          <p className="script-kicker">For someone wonderfully special</p>
          <h1>Happy Birthday,<br /><span>Mariya</span><i>♡</i></h1>
          <p className="hero-copy">
            Today, we celebrate you.<br className="desktop-break" />
            Click the button below to open your surprise.
          </p>
          <button className="button button-primary" onClick={nextChapter}>
            Open your surprise <Heart size={17} fill="currentColor" />
          </button>
          <p className="tiny-note">A little story made with a lot of love</p>
          <div className="scroll-decoration">✧ &nbsp; ✦ &nbsp; ✧</div>
        </section>
      )}

      {chapter === 1 && (
        <section className="story-screen flowers-screen">
          <div className="eyebrow"><Flower2 size={15} /> Chapter one · flowers for you</div>
          <RoseGarden />
          <p className="script-kicker">If I could send you a garden…</p>
          <h2>I'd choose every<br /><span>flower for you.</span></h2>
          <p className="story-copy">
            Not just because flowers are beautiful, but because they remind me
            that the loveliest things make the world softer simply by being here.
          </p>
          <div className="mini-note"><span>🌷</span> A little bloom for every reason you make me smile.</div>
          <button className="button button-primary" onClick={nextChapter}>
            There's one more thing <Sparkles size={16} />
          </button>
        </section>
      )}

      {chapter === 2 && (
        <section className="story-screen cake-screen">
          <div className="eyebrow"><HandHeart size={15} /> Chapter two · a special dua</div>
          <p className="script-kicker">A prayer from my heart for you</p>
          <div className="dua-card-image-wrap" style={{ width: "100%", padding: "0 12px", boxSizing: "border-box" }}>
            <img
              className="dua-card-image"
              src={`${import.meta.env.BASE_URL}mariya-birthday-dua.png`}
              alt="A birthday dua card for Mariya decorated with pink tulips and soft golden details"
              style={{ display: "block", width: "100%", maxWidth: "430px", height: "auto", margin: "0 auto", borderRadius: "24px" }}
            />
          </div>
          <button className="button button-primary" onClick={nextChapter}>
            Read your letter <Mail size={16} />
          </button>
          <p className="cake-hint">A little dua, made with love and sincerity.</p>
        </section>
      )}

      {chapter === 3 && (
        <section className="story-screen letter-screen">
          <div className="eyebrow"><Mail size={15} /> Chapter three · from my heart</div>
          <p className="script-kicker">The most important part</p>
          <h2>A few words,<br /><span>just for you.</span></h2>
          <LoveLetter opened={letterOpened} onOpen={() => setLetterOpened(true)} />
          {letterOpened && (
            <div className="final-note">
              <Heart size={18} fill="currentColor" />
              <p>Aur agar kabhi bhool jao ki aap kitni special hain, toh yeh chhota sa surprise phir se khol lena. ❤️</p>
              <button className="button button-outline" onClick={() => setShowFinal(!showFinal)}>
                {showFinal ? "Hide my final surprise" : "One last little surprise"} <Sparkles size={15} />
              </button>
              {showFinal && (
                <div className="final-surprise">
                  <span className="final-big-heart">♥</span>
                  <p className="script-kicker">In every season, in every version of you…</p>
                  <h3>I'm cheering for your happiness, always.</h3>
                  <p>Happy Birthday, Mariya. May this year be kind to you. ❤️</p>
                  <p>I live you soooooooooo muchchchchchchch ❤️❤️❤️❤️</p>
                  <div className="final-flowers">🌷 🌷 🌷 🌷</div>
                </div>
              )}
            </div>
          )}
          <button className="restart-button" onClick={restart}><RotateCcw size={14} /> Replay your surprise</button>
        </section>
      )}

      <footer className="footer">
        <span>crafted with</span><Heart size={12} fill="currentColor" /><span>for Mariya</span>
      </footer>
    </main>
  );
}
