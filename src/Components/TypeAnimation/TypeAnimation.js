import { ReactTyped } from 'react-typed';
import './TypeAnimation.css';

const TypeAnimation = () => {
  return (
    <div>
      <h1 className="type-animation">
        {'print("'}
        <ReactTyped
            strings={[
            "Hello!",
            "नमस्ते!",
            "こんにちは!",
            "Bonjour!",
            "¡Hola!",
            "안녕하세요!",
            "Ciao!",
            "Привет!",
            "مرحبًا!",
            "你好!",
            ]}
            typeSpeed={100}
            loop
            backSpeed={20}
            showCursor={true}
            style={{
            whiteSpace: 'pre',
            display: 'inline-block',
            fontWeight: 'bold',
            color: '#2774AE',
            }}
        />
        {'")'}
        </h1>
    </div>
  );
}

export default TypeAnimation;