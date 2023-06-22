import React from 'react'

export const SideNav = () => {

  function sidebarToggle () {
    //toggle sidebar function
    // this.document.body.classList.toggle('toggle-sidebar')
  }
  
  return (
    <div>
      <aside id="sidebar" class="sidebar">
  <ul class="sidebar-nav" id="sidebar-nav">
   {/* <li><i (click)="sidebarToggle()" class="bi bi-list toggle-sidebar-btn"></i></li> */}
   <i
              onClick={sidebarToggle}
              class='bi bi-list toggle-sidebar-btn'
            ></i>
    <li class="nav-item"> 
      <a class="nav-link " href="/Dashboard"> 
        <i class="bi bi-grid" />
        <span>Dashboard</span> 
      </a>
    </li>

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/"> 
        <i class="bi bi-diagram-2"></i>
        <span>Product categories</span> 
      </a>
    </li>

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/">
        <i class="bi bi-kanban"></i> 
        <span>Lead Management</span> 
      </a>
    </li>

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/">
        <i class="bi bi-envelope"></i>
        <span>Campaigns</span> 
      </a>
    </li>

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/">
        <i class="bi bi-pencil" /> 
        <span>Applications</span> 
      </a>
    </li>

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/"><i
          class="bi bi-people"></i> 
          <span>My Contracts</span> 
      </a>
    </li>

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/">
        <i class="bi bi-file-earmark-text"></i>
        <span>Claims</span>
      </a>
    </li>


    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/">
        <i class="bi bi-twitter" />
        <span>Twitter</span> 
      </a>
    </li>

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/">
        <i class="bi bi-gear" />
        <span>Settings</span> </a>
    </li>
  </ul>
</aside>
    </div>
  )
}
