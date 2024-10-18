import Button1 from '@components/Button/Button';
import ButtonAccent from '@components/Button/ButtonAccent';

export default function Home() {
  return (
    <>
        <h1>Button Components Example</h1>
        <p>Button Primary M</p>
        <ul>
            <li>
                <Button1></Button1>
            </li>
            <li>
                <Button1 disabled={true}></Button1>
            </li>
        </ul>
        
        <p>Button Accent M</p>
        <ul>
            <li>
                <ButtonAccent></ButtonAccent>
            </li>
            <li>
                <ButtonAccent disabled={true}></ButtonAccent>
            </li>
        </ul>
    </>
  );
}