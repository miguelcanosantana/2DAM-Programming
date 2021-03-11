class Distro():
    
    #builder specs
    def __init__(self, name, based):
        self.name = name
        self.basedOn = based
        
ubuntu = Distro("Ubuntu", "Debian")
print(ubuntu.name)
print(ubuntu.basedOn)