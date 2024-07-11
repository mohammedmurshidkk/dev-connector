import { ThinkingFace } from '../../public/icons/ThinkingFace';

const ThinkingIllustrator = () => {
  return (
    <div className='thinking-illustrator'>
      <div className='thinking-face'>
        <ThinkingFace />
      </div>
      <span className='thinking-text'>Thinking...</span>
    </div>
  );
};

export default ThinkingIllustrator;
