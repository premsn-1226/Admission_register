import { useEffect, useState } from 'react'
import BookDetails from './BookDetails'
function OurApp() {
    const [pets, setPets] = useState([])

    useEffect(() => {
        if (localStorage.getItem("examplePetData")) {
            setPets(JSON.parse(localStorage.getItem("examplePetData")))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("examplePetData", JSON.stringify(pets))
    }, [pets])

    return ( < > 
    <BookDetails book = { pets }> </BookDetails> 
    <TimeArea / >
        <AddPetForm setPets = { setPets }/> 
        </>
    )
}

function AddPetForm(props) {
    const [name, setName] = useState()
    const [mark, setSpecies] = useState()
    const [university, setAge] = useState()
    const [address, setAddress] = useState()
    const [states, setStates] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        props.setPets(prev => prev.concat({ name, mark, university, states, address, id: Date.now() }))
        setName("")
        setSpecies("")
        setAge("")
        setAddress("")
        setStates("")
    }

    return ( 
        <form onSubmit = { handleSubmit } >
        <fieldset>
        <legend > Add new Admission </legend> 
        <input value = { name }
        onChange = { e => setName(e.target.value) }
        placeholder = "Enter name of Student" / >
        <input value = { mark }
        onChange = { e => setSpecies(e.target.value) }
        placeholder = "Enter the Cut-Off" / >
        <input value = { university }
        onChange = { e => setAge(e.target.value) }
        placeholder = "Enter the name of University" / >
        <input value = { address }
        onChange = { e => setAddress(e.target.value) }
        placeholder = "Enter the Address" / >
        <input value = { states }
        onChange = { e => setStates(e.target.value) }
        placeholder = "Enter the State" / >
        <button > Submit </button> </fieldset > </form>
    )
}

/*</button>function Pet(props) {
    function handleDelete() {
        props.setPets(prev => prev.filter(pet => pet.id != props.id))
    }
    console.log(props);
}*/

function TimeArea() {
    const [theTime, setTheTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 2000)

        return () => clearInterval(interval)
    }, [])

    return <p> The current time is { theTime }. </p>
}


export default OurApp