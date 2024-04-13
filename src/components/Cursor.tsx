import { useEffect, useState } from "react";
import CSS from 'csstype';

const Cursor = (): JSX.Element => {
    const [x, setX] = useState<number>(-10)
    const [y, setY] = useState<number>(-10)
    const [color, setColor] = useState<string>('black')

    const myStyle: CSS.Properties = {
        width: '20px',
        height: '20px',
        position: 'absolute',
        border: '1px solid',
        borderRadius: '50%',
        borderColor: color,
        left: (x - 10).toString() + 'px',
        top: (y - 10).toString() + 'px'
    }

    const handleMouseMove = (e: MouseEvent) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    const handleMouseLeave = () => {
        setX(-10)
        setY(-10)
    }

    const handleMouseDown = () => setColor('gray')

    const handleMouseUp = () => setColor('black')

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)
        document.body.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
            document.body.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])
    
    return (
        <span className="cursor" style={myStyle} />
    );
}

export default Cursor;
