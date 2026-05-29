
interface ScreenBProps {
    id: string | undefined;
}

const ScreenB = (props: ScreenBProps) => {

    const code = `<pre><code>${JSON.stringify(props)}</code></pre>`;

    return <div>hello from screen B {code}</div>

}

export default ScreenB;