import { FadeIn } from "react-slide-fade-in";
import "./Fade.css";
const Fade = () => (
  <div className="fadebox">
    <div className="fadestyle1>">
      <h1>
        STAKE <br />
        HOLDERS
        <br />
        <br />
      </h1>
      <FadeIn
        from="bottom"
        positionOffset={400}
        triggerOffset={200}
        delayInMilliseconds={0}
      >
        <span> NAVEEN RM</span>
      </FadeIn>
      <FadeIn
        from="top"
        positionOffset={400}
        triggerOffset={400}
        delayInMilliseconds={800}
      >
        <span>PARANTHAMAN L</span>
      </FadeIn>
      <FadeIn
        from="left"
        positionOffset={400}
        triggerOffset={200}
        delayInMilliseconds={400}
      >
        <span>NIVEDHITHA J</span>
      </FadeIn>
      <FadeIn
        from="right"
        positionOffset={400}
        triggerOffset={200}
        delayInMilliseconds={600}
      >
        <span>MOHAN K</span>
      </FadeIn>
      <FadeIn
        from="bottom"
        positionOffset={0}
        triggerOffset={0}
        delayInMilliseconds={800}
      >
        <span>PRASANNA V</span>
      </FadeIn>
      <FadeIn
        from="bottom"
        positionOffset={0}
        triggerOffset={0}
        delayInMilliseconds={1000}
      >
        <span>PRAVEEN S</span>
      </FadeIn>
    </div>
  </div>
);
export default Fade;
