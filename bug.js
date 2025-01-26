```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count updated:', count);
  }, [count]); // Only re-run if 'count' changes

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // This is the bug, it overrides previous setCount
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```