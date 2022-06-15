import getDetails from "./getDetails";

export function updateNotes({ path, setContentNote, setContentNvotes }) {
    getDetails({ path }).then((data) => {
        setContentNote(data.note)
        setContentNvotes(data.n_votes)
    })
}
