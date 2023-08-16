'use client';
import React, { useEffect, useState } from 'react'
import styles from './styles/Footer.module.scss'
import { redirect, useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Redirect } from 'next';
import path from 'path';
export  const Footer:React.FC = ()=>{

    const router = useRouter()
    return(
        <div className={styles.footer} >
            <div>
            <a href="https://github.com/abolfazllmaleki">

            <img  alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CjxwYXRoIGQ9Ik0zNiwxMmMxMy4yNTUsMCwyNCwxMC43NDUsMjQsMjRjMCwxMC42NTYtNi45NDgsMTkuNjg1LTE2LjU1OSwyMi44MThjMC4wMDMtMC4wMDksMC4wMDctMC4wMjIsMC4wMDctMC4wMjIJcy0xLjYyLTAuNzU5LTEuNTg2LTIuMTE0YzAuMDM4LTEuNDkxLDAtNC45NzEsMC02LjI0OGMwLTIuMTkzLTEuMzg4LTMuNzQ3LTEuMzg4LTMuNzQ3czEwLjg4NCwwLjEyMiwxMC44ODQtMTEuNDkxCWMwLTQuNDgxLTIuMzQyLTYuODEyLTIuMzQyLTYuODEyczEuMjMtNC43ODQtMC40MjYtNi44MTJjLTEuODU2LTAuMi01LjE4LDEuNzc0LTYuNiwyLjY5N2MwLDAtMi4yNS0wLjkyMi01Ljk5MS0wLjkyMgljLTMuNzQyLDAtNS45OTEsMC45MjItNS45OTEsMC45MjJjLTEuNDE5LTAuOTIyLTQuNzQ0LTIuODk3LTYuNi0yLjY5N2MtMS42NTYsMi4wMjktMC40MjYsNi44MTItMC40MjYsNi44MTIJcy0yLjM0MiwyLjMzMi0yLjM0Miw2LjgxMmMwLDExLjYxMywxMC44ODQsMTEuNDkxLDEwLjg4NCwxMS40OTFzLTEuMDk3LDEuMjM5LTEuMzM2LDMuMDYxYy0wLjc2LDAuMjU4LTEuODc3LDAuNTc2LTIuNzgsMC41NzYJYy0yLjM2MiwwLTQuMTU5LTIuMjk2LTQuODE3LTMuMzU4Yy0wLjY0OS0xLjA0OC0xLjk4LTEuOTI3LTMuMjIxLTEuOTI3Yy0wLjgxNywwLTEuMjE2LDAuNDA5LTEuMjE2LDAuODc2czEuMTQ2LDAuNzkzLDEuOTAyLDEuNjU5CWMxLjU5NCwxLjgyNiwxLjU2NSw1LjkzMyw3LjI0NSw1LjkzM2MwLjYxNywwLDEuODc2LTAuMTUyLDIuODIzLTAuMjc5Yy0wLjAwNiwxLjI5My0wLjAwNywyLjY1NywwLjAxMywzLjQ1NAljMC4wMzQsMS4zNTUtMS41ODYsMi4xMTQtMS41ODYsMi4xMTRzMC4wMDQsMC4wMTMsMC4wMDcsMC4wMjJDMTguOTQ4LDU1LjY4NSwxMiw0Ni42NTYsMTIsMzZDMTIsMjIuNzQ1LDIyLjc0NSwxMiwzNiwxMnoiPjwvcGF0aD4KPC9zdmc+"/>
            </a>
            </div>
            <div>

<a href="https://www.linkedin.com/in/abolfazl-maleki-a30a9a22b/">
    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CiAgICA8cGF0aCBkPSJNNDEsNEg5QzYuMjQsNCw0LDYuMjQsNCw5djMyYzAsMi43NiwyLjI0LDUsNSw1aDMyYzIuNzYsMCw1LTIuMjQsNS01VjlDNDYsNi4yNCw0My43Niw0LDQxLDR6IE0xNywyMHYxOWgtNlYyMEgxN3ogTTExLDE0LjQ3YzAtMS40LDEuMi0yLjQ3LDMtMi40N3MyLjkzLDEuMDcsMywyLjQ3YzAsMS40LTEuMTIsMi41My0zLDIuNTNDMTIuMiwxNywxMSwxNS44NywxMSwxNC40N3ogTTM5LDM5aC02YzAsMCwwLTkuMjYsMC0xMCBjMC0yLTEtNC0zLjUtNC4wNGgtMC4wOEMyNywyNC45NiwyNiwyNy4wMiwyNiwyOWMwLDAuOTEsMCwxMCwwLDEwaC02VjIwaDZ2Mi41NmMwLDAsMS45My0yLjU2LDUuODEtMi41NiBjMy45NywwLDcuMTksMi43Myw3LjE5LDguMjZWMzl6Ij48L3BhdGg+Cjwvc3ZnPg=="/>
</a>
</div>
        </div>

    )
}